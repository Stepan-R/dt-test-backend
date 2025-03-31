import { Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response) => {
    console.error(err);

    res.status(500).json({
        message: 'An unexpected error occurred',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    });
};

export default errorHandler;