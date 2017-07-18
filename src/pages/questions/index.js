import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

import QuestionList from '../../components/QuestionList'
import TeacherLayout from '../../components/layouts/TeacherLayout'
import pageWithIntl from '../../lib/pageWithIntl'
import withData from '../../lib/withData'

class Index extends Component {
  static propTypes = {
    intl: PropTypes.shape({
      formatMessage: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    searched: 0,
    sidebarActive: 'pool',
    sidebarVisible: false,
  }

  handleSearch = () => {
    this.setState(prevState => ({
      searched: prevState.searched + 1,
    }))

    console.log('searched...')
  }

  handleSidebarToggle = () => {
    this.setState({ sidebarVisible: !this.state.sidebarVisible })
  }

  handleSort = () => {
    console.log('sorted...')
  }

  render() {
    const { intl } = this.props

    const navbarConfig = {
      accountShort: 'AW',
      search: {
        handleSearch: this.handleSearch,
        handleSort: this.handleSort,
        query: '',
      },
      title: intl.formatMessage({
        id: 'pages.questionPool.title',
        defaultMessage: 'Question Pool',
      }),
    }

    return (
      <TeacherLayout intl={intl} navbar={navbarConfig} sidebar={{ activeItem: 'questionPool' }}>
        <Grid padded columns="2">
          <Grid.Column>
            <QuestionList />
          </Grid.Column>
          <Grid.Column>blablabla</Grid.Column>
        </Grid>
      </TeacherLayout>
    )
  }
}

export default withData(pageWithIntl(Index))