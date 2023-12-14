package com.alexbalmus.acbjhblog.service.mapper;

import com.alexbalmus.acbjhblog.domain.Tag;
import com.alexbalmus.acbjhblog.service.dto.TagDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Tag} and its DTO {@link TagDTO}.
 */
@Mapper(componentModel = "spring")
public interface TagMapper extends EntityMapper<TagDTO, Tag> {}
