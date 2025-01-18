import { format, parse } from 'date-fns';
import Link from 'next/link';
import { CalendarDays, Tag } from 'lucide-react';
import { Post } from '@/blog/types/post';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/common/components/card';
import { Badge } from '@/common/components/badge';
import { Button } from '@/common/components/button';
import { pl } from 'date-fns/locale/pl';

export const PostCard = ({ post, date }: { post: Post; date: string }) => {
  return (
    <article className="flex flex-col items-start justify-between">
      <Card key={post.id} className="flex flex-col w-full">
        <CardHeader>
          <CardTitle className="text-xl">
            {post.type === 'short' ? (
              post.title
            ) : (
              <Link className="link" href={post.url}>
                {post.title}
              </Link>
            )}
          </CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            {format(
              parse(date, 'dd/MM/yyyy HH:mm', new Date()),
              'd LLLL yyyy, HH:mm',
              { locale: pl },
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">
            {post.type === 'short' ? post.content : post.description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          {post.type === 'long' && (
            <Link className="link" href={post.url}>
              <Button variant="link" className="p-0">
                Czytaj dalej
              </Button>
            </Link>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    </article>
  );
};
