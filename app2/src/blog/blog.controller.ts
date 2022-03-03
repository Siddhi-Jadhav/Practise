import { UpdateBlogDTO } from './dto/update.blog.dto';
import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { SearchBlogDTO } from './dto/search.blog.dto';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dto/create.blog.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetUser } from 'src/user/get.user.decorator';

@Controller('blog')
@UseGuards(AuthGuard())
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBlog(
    @GetUser() user: UserEntity,
    @Body() createBlogDto: CreateBlogDTO,
  ) {
    return this.blogService.createBlog(createBlogDto, user);
  }

  @Get()
  getBlogs(@Query() searchBlogDto: SearchBlogDTO) {
    console.log(searchBlogDto);
    return this.blogService.getBlogs(searchBlogDto);
  }

  @Put('/:id')
  updateBlog(
    @GetUser() user: UserEntity,
    @Body() updateBlogDto: UpdateBlogDTO,
    @Param('id') id: string,
  ) {
    return this.blogService.updateBlog(updateBlogDto, user, id);
  }

  @Delete('/:id')
  deleteBlog(@GetUser() user: UserEntity, @Param('id') id: string) {
    return this.blogService.deleteBlog(id, user);
  }
}
