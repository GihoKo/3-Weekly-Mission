import styled from 'styled-components';

import Hero from '../components/Hero/Hero';
import Contents from '../components/Contents/Contents';
import LinkCreator from '../components/Hero/LinkCreator.jsx/LinkCreator';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import FolderCollection from '../components/Contents/FolderCollection/FolderCollection';

import Modal from '../components/Modal/Modal';
import { useFolder, useModal } from './useFolderPage.hook';

const FolderPage = ({ userData }) => {
  const { modal, setModal, showModal, closeModal } = useModal();
  const { folderData, folderCardData, handleOverviewCardButtonClick, handleFilteredCardButtonClick } = useFolder();

  return (
    <FolderPageWrapper>
      <Hero>
        <LinkCreator onUpdateButtonClick={showModal} />
      </Hero>
      <Contents>
        <Search />
        <FolderCollection
          onButtonClick={showModal}
          userData={userData}
          folderData={folderData}
          onOverviewCardButtonClick={handleOverviewCardButtonClick}
          onFilteredCardButtonClick={handleFilteredCardButtonClick}
        />
        <CardList cardData={folderCardData} onDeleteButtonClick={showModal} />
      </Contents>
      {modal.name ? <Modal modal={modal} setModal={setModal} onCloseModalButtonClick={closeModal} /> : null}
    </FolderPageWrapper>
  );
};

const FolderPageWrapper = styled.div`
  position: relative;
`;

export default FolderPage;
