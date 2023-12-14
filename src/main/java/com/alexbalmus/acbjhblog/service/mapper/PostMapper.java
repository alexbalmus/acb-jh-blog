package com.alexbalmus.acbjhblog.service.mapper;

import com.alexbalmus.acbjhblog.domain.Blog;
import com.alexbalmus.acbjhblog.domain.Post;
import com.alexbalmus.acbjhblog.domain.Tag;
import com.alexbalmus.acbjhblog.service.dto.BlogDTO;
import com.alexbalmus.acbjhblog.service.dto.PostDTO;
import com.alexbalmus.acbjhblog.service.dto.TagDTO;
import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring")
public interface PostMapper extends EntityMapper<PostDTO, Post> {
    @Mapping(target = "blog", source = "blog", qualifiedByName = "blogName")
    @Mapping(target = "tags", source = "tags", qualifiedByName = "tagNameSet")
    PostDTO toDto(Post s);

    @Mapping(target = "removeTag", ignore = true)
    Post toEntity(PostDTO postDTO);

    @Named("blogName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    BlogDTO toDtoBlogName(Blog blog);

    @Named("tagName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    TagDTO toDtoTagName(Tag tag);

    @Named("tagNameSet")
    default Set<TagDTO> toDtoTagNameSet(Set<Tag> tag) {
        return tag.stream().map(this::toDtoTagName).collect(Collectors.toSet());
    }
}
