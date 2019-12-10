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
 * The child data submitted from the form is supposed to
 * have the same types as the child data received from backend
 * TODO: Fix reducer default data to match backend typing
 */
export const getSupportedChildData = (child: Child) => {
  const omited = omit(child, 'homeCity');
  return Object.assign(omited, {
    relationship: { type: child.relationship },
  });
};
