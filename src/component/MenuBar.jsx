import { Menu } from 'semantic-ui-react'


export default function MenuBar () {

    return(
        <Menu inverted>
            <Menu.Item
                name='home'
            />
            <Menu.Item
                name='messages'
            />
            <Menu.Item
                name='friends'
            />
        </Menu>

    );
}