import React from 'react';
import { Image, Header, Button, Icon, Label, Menu, Table, List } from 'semantic-ui-react'

const VinylTable = () => (
  <Table celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Album Cover</Table.HeaderCell>
        <Table.HeaderCell>Vinyl</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h1' image>
            <Image src='https://upload.wikimedia.org/wikipedia/en/f/f6/Off_the_wall.jpg' size='huge' />
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Table.Row>Off the Wall</Table.Row>
          <Table.Row>Michael Jackson</Table.Row>
          <Table.Row>1979</Table.Row>
        </Table.Cell>
        <Table.Cell>
          <button class="ui yellow button" onclick="myFunction()">Modify</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h1' image>
            <Image src='http://www.ac-dc.net/img-cover/discog_6.jpg' size='huge' />
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Table.Row>Let There Be Rock</Table.Row>
          <Table.Row>AC/DC</Table.Row>
          <Table.Row>1977</Table.Row>
        </Table.Cell>
        <Table.Cell>
          <button class="ui yellow button">Modify</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h1' image>
            <Image src='https://upload.wikimedia.org/wikipedia/fi/1/1e/HelpUK.jpg' size='huge' />
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Table.Row>Help!</Table.Row>
          <Table.Row>the Beatles</Table.Row>
          <Table.Row>1965</Table.Row>
        </Table.Cell>
        <Table.Cell>
          <button class="ui yellow button">Modify</button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h1' image>
            <Image src='https://upload.wikimedia.org/wikipedia/fi/4/4e/DavidBowie-albums-hunkydory.jpg' size='huge' />
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Table.Row>Hunky Dory</Table.Row>
          <Table.Row>David Bowie</Table.Row>
          <Table.Row>1971</Table.Row>
        </Table.Cell>
        <Table.Cell>
          <button class="ui yellow button">Modify</button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)


export default VinylTable;
