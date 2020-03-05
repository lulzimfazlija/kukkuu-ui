import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProfileEvents from '../ProfileEvents';
import ProfileNoEvent from '../ProfileNoEvent';
import ProfileEventsList from '../ProfileEventsList';
import {
  childByIdQuery_child as Child,
  childByIdQuery_child_enrolments as Enrolments,
  childByIdQuery_child_availableEvents as AvailableEvents,
  childByIdQuery_child_pastEvents as PastEvents,
} from '../../../api/generatedTypes/childByIdQuery';

const childData: Child = {
  id: '',
  firstName: '',
  lastName: '',
  birthdate: '',
  postalCode: '',
  relationships: {
    edges: [],
  },
  availableEvents: { edges: [] },
  enrolments: { edges: [] },
  pastEvents: { edges: [] },
};

const childNoEvents = {
  ...childData,
  availableEvents: null,
  enrolments: {
    edges: [],
  },
  pastEvents: null,
};

const availableEvents: AvailableEvents = {
  edges: [
    {
      node: {
        id: 'RXZlbnROb2RlOjE=',
        name: 'pentti',
        shortDescription: 'eventti',
        image:
          'http://localhost:8081/media/2020-02-15-184035_1920x1080_scrot.png',
      },
    },
  ],
};

const enrolments: Enrolments = {
  edges: [
    {
      node: {
        occurrence: {
          id: '',
          time: '',
          venue: {
            id: '',
            name: '',
          },
          event: {
            id: 'RXZlbnROb2RlOjE=',
            name: 'pentti',
            shortDescription: 'eventti',
            image:
              'http://localhost:8081/media/2020-02-15-184035_1920x1080_scrot.png',
          },
        },
      },
    },
  ],
};

const pastEvents: PastEvents = {
  edges: [
    {
      node: {
        id: 'RXZlbnROb2RlOjE=',
        name: 'pentti',
        shortDescription: 'eventti',
        image:
          'http://localhost:8081/media/2020-02-15-184035_1920x1080_scrot.png',
      },
    },
  ],
};

const childWithEvents: Child = {
  ...childData,
  availableEvents: availableEvents,
  enrolments: enrolments,
  pastEvents: pastEvents,
};

const childOnlyAvailableEvents: Child = {
  ...childData,
  availableEvents: availableEvents,
  enrolments: {
    edges: [],
  },
  pastEvents: null,
};

const childOnlyEnrolments: Child = {
  ...childData,
  availableEvents: null,
  enrolments: {
    edges: [
      {
        node: {
          occurrence: {
            id: '',
            time: '',
            venue: {
              id: '',
              name: '',
            },
            event: {
              id: 'RXZlbnROb2RlOjE=',
              name: 'pentti',
              shortDescription: 'eventti',
              image:
                'http://localhost:8081/media/2020-02-15-184035_1920x1080_scrot.png',
            },
          },
        },
      },
    ],
  },
  pastEvents: null,
};

const childOnlyPastEvents = {
  ...childData,
  availableEvents: null,
  enrolments: {
    edges: [],
  },
  pastEvents: pastEvents,
};

test('Renders snapshot correctly', () => {
  const input = shallow(<ProfileEvents child={childNoEvents} />);
  expect(toJson(input)).toMatchSnapshot();
});

test('Renders "No events" when no events"', () => {
  const wrapper = shallow(<ProfileEvents child={childNoEvents} />);
  expect(wrapper.equals(<ProfileNoEvent />)).toEqual(true);
  expect(
    wrapper.equals(
      <ProfileEventsList
        child={childWithEvents}
        availableEvents={childWithEvents.availableEvents}
        enrolments={childWithEvents.enrolments}
        pastEvents={childWithEvents.pastEvents}
      />
    )
  ).toEqual(false);
});

test('Renders events list when events of any type', () => {
  const wrapper = shallow(<ProfileEvents child={childWithEvents} />);
  expect(
    wrapper.equals(
      <ProfileEventsList
        child={childWithEvents}
        availableEvents={childWithEvents.availableEvents}
        enrolments={childWithEvents.enrolments}
        pastEvents={childWithEvents.pastEvents}
      />
    )
  ).toEqual(true);
});

test('Renders events list when only availableEvents', () => {
  const wrapper = shallow(<ProfileEvents child={childOnlyAvailableEvents} />);
  expect(
    wrapper.equals(
      <ProfileEventsList
        availableEvents={childOnlyAvailableEvents.availableEvents}
        child={childOnlyAvailableEvents}
        enrolments={childOnlyAvailableEvents.enrolments}
        pastEvents={childOnlyAvailableEvents.pastEvents}
      />
    )
  ).toEqual(true);
});

test('Renders events list when only enrolments', () => {
  const wrapper = shallow(<ProfileEvents child={childOnlyEnrolments} />);
  expect(
    wrapper.equals(
      <ProfileEventsList
        child={childOnlyEnrolments}
        availableEvents={childOnlyEnrolments.availableEvents}
        enrolments={childOnlyEnrolments.enrolments}
        pastEvents={childOnlyEnrolments.pastEvents}
      />
    )
  ).toEqual(true);
});

test('Renders events list when only past events', () => {
  const wrapper = shallow(<ProfileEvents child={childOnlyPastEvents} />);
  expect(
    wrapper.equals(
      <ProfileEventsList
        child={childOnlyPastEvents}
        availableEvents={childOnlyPastEvents.availableEvents}
        enrolments={childOnlyPastEvents.enrolments}
        pastEvents={childOnlyPastEvents.pastEvents}
      />
    )
  ).toEqual(true);
});
