package com.alexbalmus.acbjhblog.service.mapper;

import org.junit.jupiter.api.BeforeEach;

class BlogMapperTest {

    private BlogMapper blogMapper;

    @BeforeEach
    public void setUp() {
        blogMapper = new BlogMapperImpl();
    }
}
