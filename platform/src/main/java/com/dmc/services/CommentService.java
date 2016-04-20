package com.dmc.services;


import com.dmc.domain.Comment;

/**
 * @author xiaobianchen
 * @version 1.0 2015/6/23
 * @link https://github.com/xiaobianchen/DMC
 *
 */
@SuppressWarnings("rawtypes")
public interface CommentService extends BaseService{

    void save(Comment comment);
}