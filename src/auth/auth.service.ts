import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../schemas/user.schemas';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

  async validateUser(profile: any): Promise<any> {
    const { id, emails, displayName } = profile;
    let user = await this.userModel.findOne({ googleId: id });

    if (!user) {
      user = new this.userModel({
        email: emails[0].value,
        name: displayName,
        googleId: id,
      });
      await user.save();
    }
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
