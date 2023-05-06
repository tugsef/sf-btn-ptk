import React from 'react'

import { Button } from 'sf-btn-ptk'
import 'sf-btn-ptk/dist/index.css'

const App = () => {
  return (
    <>
      <div>
        <Button type='primary_small' text="Button" />
        <Button type='primary_medium' text="Button" />
        <Button type='primary_large' text="Button" />
      </div>

      <div style={{ display: "inline-block" }}>
        <Button type='default_small' text="Button" />
        <Button type='default_medium' text="Button" />
        <Button type='default_large' text="Button" />
      </div>
      <div></div>
      <div style={{ display: "inline-block" }}>
        <Button type='dashed_small' text="Button" />
        <Button type='dashed_medium' text="Button" />
        <Button type='dashed_large' text="Button" />
      </div>
      <div></div>
      <div style={{ display: "inline-block" }}>
        <Button type='text_small' text="Button" />
        <Button type='text_medium' text="Button" />
        <Button type='text_large' text="Button" />
      </div>
      <div></div>
      <div style={{ display: "inline-block" }}>
        <Button type='link_small' text="Link!" />
        <Button type='link_medium' text="Link!" />
        <Button type='link_large' text="Link!" />
      </div>

    </>
  )

}

export default App
