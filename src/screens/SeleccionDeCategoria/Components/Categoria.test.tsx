import * as React from 'react'
import {Button, Text, TextInput, View} from 'react-native'
import {render, screen, fireEvent} from '@testing-library/react-native'

function Example() {

  return (
    <View>
      <Text>aaaa</Text>
    </View>
  )
}

test('examples of some things', async () => {
  render(<Example />)

  expect(1).toEqual(1)

})