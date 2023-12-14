package com.alexbalmus.acbjhblog.service.mapper;

import com.alexbalmus.acbjhblog.domain.Blog;
import com.alexbalmus.acbjhblog.domain.User;
import com.alexbalmus.acbjhblog.service.dto.BlogDTO;
import com.alexbalmus.acbjhblog.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Blog} and its DTO {@link BlogDTO}.
 */
@Mapper(componentModel = "spring")
public interface BlogMapper extends EntityMapper<BlogDTO, Blog> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userLogin")
    BlogDTO toDto(Blog s);

    @Named("userLogin")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "login", source = "login")
    UserDTO toDtoUserLogin(User user);
}
