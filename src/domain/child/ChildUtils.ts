import { TFunction } from 'i18next';
import { omit } from 'lodash';

import { RelationshipTypeEnum } from '../api/generatedTypes/globalTypes';
import { Child } from './types/ChildTypes';
interface ChildRelationshipOptions {
  label: string;
  value: RelationshipTypeEnum;
}

/**
 * Translate label of relationship options.
 * @param {Function} Translation function from i18next-react
 * @return {ChildRelationshipOptions}[] array of label-value pairs with translated labels
 */
export const getTranslatedRelationshipOptions = (
  t: TFunction
): ChildRelationshipOptions[] => {
  return [
    {
      label: t(`CHILD_RELATIONSHIP_OPTIONS.${RelationshipTypeEnum.ADVOCATE}`),
      value: RelationshipTypeEnum.ADVOCATE,
    },
    {
      label: t(
        `CHILD_RELATIONSHIP_OPTIONS.${RelationshipTypeEnum.OTHER_GUARDIAN}`
      ),
      value: RelationshipTypeEnum.OTHER_GUARDIAN,
    },
    {
      label: t(
        `CHILD_RELATIONSHIP_OPTIONS.${RelationshipTypeEnum.OTHER_RELATION}`
      ),
      value: RelationshipTypeEnum.OTHER_RELATION,
    },
    {
      label: t(`CHILD_RELATIONSHIP_OPTIONS.${RelationshipTypeEnum.PARENT}`),
      value: RelationshipTypeEnum.PARENT,
    },
  ];
};

/**
 * Child data which was submit from form supposed to have same
 * type with child data from backend input
 * TODO: Fix reducer default data to match backend requirement
 */
export const getSupportedChildData = (child: Child) => {
  const omited = omit(child, 'homeCity');
  return Object.assign(omited, {
    relationship: { type: child.relationship },
  });
};
