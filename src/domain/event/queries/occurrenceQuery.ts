import gql from 'graphql-tag';

const occurrenceQuery = gql`
  query occurrenceQuery($id: ID!) {
    occurrence(id: $id) {
      id
      time
      remainingCapacity
      event {
        id
        image
        description
        shortDescription
        name
        duration
        participantsPerInvite
      }
      venue {
        id
        name
        description
        address
        accessibilityInfo
        arrivalInstructions
        additionalInfo
      }
    }
  }
`;
export default occurrenceQuery;
