import React from 'react'
import { screen, render } from '@testing-library/react'
import Episodes from './Episodes'

const episodes = [
  {
    id: 553946,
    url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg", original: "https://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    },
    summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/553946"
      }
    }
  }
]

// The Episodes component needs props.episodes in order to render,
// so if we try to render with no props, the render will fail.
// We get 'Cannot read property 'map' of undefined' because
// props.episodes is undefined. 

// Episodes is a required prop - we can pass an empty array 
// (like we do for initial render in our compiled app) 
// and the test will pass

test('Renders Episodes with no errors', () => {
  render(<Episodes episodes={[]} />)
})

// Rerender Episodes when it receives props.episodes from prop obj
// Simulate user clicking on div.Dropdown-option
// and will cause props.episodes to update in Episodes.js
test('Re-renders Episodes with props.episodes passed in', () => {
  const { rerender } = render(<Episodes episodes={[]} />)

  // first assert there are no episodes in the UI
  expect(screen.queryByText(/the vanishing of will byers/i)).toBeNull()

  // re-render component with new props
  rerender(<Episodes episodes={episodes} />)

  // assert that episodes are rendered in the UI
  expect(screen.getByText(/the vanishing of will byers/i)).toBeInTheDocument()

  // we want to use getBy and not queryBy so the test will throw an error if 
  // screen does not find an element containing the text 'the vanishing of will byers'
})
