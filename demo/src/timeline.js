/* eslint-disable indent */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Timeline from 'react-time-line'
import { Reboot, Classes } from 'bootstrap-jss'
import { replace } from 'lodash'
import injectSheet, { ThemeProvider } from 'react-jss'
const { btn, btnLg, btnSm, btnLink, btnThemeColors, btnBlock, btnOutlineThemeColors } = Classes.Buttons
const { btnGroup, btnGroupToggle, btnToolbar } = Classes.ButtonGroup

const themeColors = btnThemeColors()
const themeOutlineColors = btnOutlineThemeColors()

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

const event1 = [
    { ts: '2017-09-16T12:22:46.587Z', text: 'Swith IP location alert' },
    { ts: '2017-09-16T12:21:46.587Z', text: 'Report Repair Applications Alert' },
    { ts: '2017-09-16T12:20:46.587Z', text: 'Login by many user names' }
]

const themeColorName = 'btn-primary'

const IntelligentTimeLine = () => <div>
  <Timeline items={event1} />
  <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
    <span>
      <Button buttonValue='Device Freeze' />
    </span>
  </ThemeProvider>
  <Timeline items={event1} />
  <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
    <span>
      <Button buttonValue='File Delete' />
    </span>
  </ThemeProvider>
  <Timeline items={event1} />
  <ThemeProvider key={themeColorName} theme={{ color: themeColorName }}>
    <span>
      <Button buttonValue='Report Stolen Device' />
    </span>
  </ThemeProvider>
</div>

storiesOf('Intelligence', module)
    .add('alert', () => <IntelligentTimeLine />
    )
