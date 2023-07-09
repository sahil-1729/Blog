import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render,screen} from '@testing-library/react'
import Blog from './Blog'
import Toggle from './Toggle'
test('renders blog title and author', async () => {
    const blogs = {
        "title": "Exploring the Wonders of Underwater Photography",
        "author": "David Miller",
        "url": "www.exampleblog.com/exploring-underwater-photography",
        "likes": 112
      }
    let container = render(<Blog blog={blogs} />).container
    // screen.debug()
    let anotherContainer = render(<Toggle buttonLabel1='yes' buttonLabel2='no'/>).container
    const author = anotherContainer.querySelector('.show')
    const title = container.querySelector('.title')
    expect(title).toBeDefined()
    expect(author).toHaveStyle('display : none')
})