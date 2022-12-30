import React, { useState, useEffect } from 'react';

import { Background, Tittle, ContainerProject } from './styles'

import Project from '../../components/Project';
import EndPageLink from '../../components/EndPageLink/index';

import img1 from '../../assets/github-repo.png';
import api from '../../services/api';

interface RepositoryGithub {
        id: number,
        name: string,
        description: string,
        html_url: string,
        language: string, 
}

type RepositoryGithubType = RepositoryGithub[];

const Projects: React.FC = () => {
    const [repository, setRepository] = useState<RepositoryGithubType | null>([])

    useEffect(() => {
        api.get(`users/w-araujo/repos?sort=created`).then(response => {
            setRepository(response.data)
        })
    })
    
    return (
        <Background>
            <Tittle>Portifólio</Tittle>
            <ContainerProject>
            {repository?.map(repo => (
                    <Project
                    key={repo.id}
                    img={img1}
                    name={repo.name}
                    description={repo.language} 
                    html_url={repo.html_url}
                    />
                ))}
            </ContainerProject>
            <EndPageLink name='Página Inicial' link='/'/>
        </Background>
    )

}

export default Projects;