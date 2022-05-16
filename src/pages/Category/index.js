import React from 'react'
import CategoryTable from './CategoryTable'
import Container from 'components/Container'
import Card from 'components/Card'
import Button from 'components/Button'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div>
            <Container title="Categories / Sub-categories">
                <Card>
                    <div className='space-y-4'>
                        <div className=''>
                            <div className='py-4 flex items-center justify-between'>
                                <div className='text-xl'>
                                    categories
                                </div>
                                <div>
                                    <Link to="/add-category">
                                        <Button onClick>
                                            Add Category
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <CategoryTable />
                            </div>
                        </div>
                        <div className='py-2'>
                            <div className='py-4 flex items-center justify-between'>
                                <div className='text-xl'>
                                    sub-categories
                                </div>
                                <div>
                                    <Button>
                                        Add sub-Category
                                    </Button>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <CategoryTable />
                            </div>
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Category