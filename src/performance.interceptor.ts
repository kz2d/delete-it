import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Res } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class PerformanceInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        const res = context.switchToHttp().getResponse<Response>();
        return next
            .handle()
            .pipe(
                tap((context) => res.setHeader('Server-Timing', 'response;dur=' + (Date.now() - now))),
            );
    }
}