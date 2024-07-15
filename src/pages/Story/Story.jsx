import React from 'react'
import StoryViewer from '../../components/StoryComponents/StoryViewer'

const Story = () => {
    const story = [
        {
        image: "https://f4.bcbits.com/img/a4193162296_10.jpg"
        },
        {
            image: "https://i.pinimg.com/736x/7c/cd/d3/7ccdd36695ceaffdaaaeb4446ca6d01c.jpg"
        },
        {
            image: "https://staleynews.com/wp-content/uploads/2022/02/MaggieGum_1_10photosforonlinecontentidea20220109_0001.jpg"
        },
        {
            image: "https://i.redd.it/sjusjrmpazh81.jpg"
        },
        {
            image: "https://media.tenor.com/_ETKRybU9WEAAAAC/orange-cat-stare.gif"
        }

]
  return (
    <div>
      <StoryViewer stories={story}/>
    </div>
  )
}

export default Story
