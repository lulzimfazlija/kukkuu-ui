import { RelationshipTypeEnum } from '../../api/generatedTypes/globalTypes';

export const CHILD_RELATIONSHIP_OPTIONS = [
  {
    label: RelationshipTypeEnum.ADVOCATE,
    value: RelationshipTypeEnum.ADVOCATE,
  },
  {
    label: RelationshipTypeEnum.OTHER_GUARDIAN,
    value: RelationshipTypeEnum.OTHER_GUARDIAN,
  },
  {
    label: RelationshipTypeEnum.OTHER_RELATION,
    value: RelationshipTypeEnum.OTHER_RELATION,
  },
  {
    label: RelationshipTypeEnum.PARENT,
    value: RelationshipTypeEnum.PARENT,
  },
];
