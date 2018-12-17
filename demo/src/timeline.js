/* eslint-disable indent */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Timeline from 'react-time-line'
import { Reboot, Classes } from 'bootstrap-jss'
import injectSheet, { ThemeProvider } from 'react-jss'
const { btn, btnThemeColors } = Classes.Buttons

const themeColors = btnThemeColors()

const Button = injectSheet(theme => ({
    active: {},
    disabled: {},
    show: {},
    focus: {},
    dropdownToggle: {},
    btn: {
        ...Reboot.forms,
        ...btn,
        ...themeColors[theme.color],
        marginRight: '0.25rem',
        marginLeft: '2rem'
    }
}))(({ buttonValue, classes }) =>
  <button className={classes.btn}>{buttonValue}</button>
)

const predictAPI = () => {
  return fetch('http://localhost:5000/predict', { mode: 'cors'})
    .then(res => {console.log(res)})
    .catch(error => error)
}

predictAPI()

const event1 = [
    { ts: '2017-09-16T12:22:46.587Z', text: 'Swith IP location alert 10 times' },
    { ts: '2017-09-16T12:21:46.587Z', text: 'Report Repair Applications Alert 5 times' },
    { ts: '2017-09-16T12:20:46.587Z', text: 'Login by many user names 20 times' }
]

const themeColorName = 'btn-primary'

const IntelligentTimeLine = () => <div>
  <Timeline items={event1} />
  <ThemeProvider theme={{ color: themeColorName }}>
    <span>
      <Button buttonValue='Device Freeze' />
    </span>
  </ThemeProvider>
  <Timeline items={event1} />
  <ThemeProvider theme={{ color: themeColorName }}>
    <span>
      <Button buttonValue='File Delete' />
    </span>
  </ThemeProvider>
  <Timeline items={event1} />
  <ThemeProvider theme={{ color: themeColorName }}>
    <span>
      <Button buttonValue='Report Stolen Device' />
    </span>
  </ThemeProvider>
</div>

storiesOf('Intelligence', module)
    .add('alert', () => <IntelligentTimeLine />
    )
