import { useState } from 'react';
import ArticleControlls from '../../components/userArticleComponents/articleControlls/articleControlls';
import UserArticles from '../../components/userArticleComponents/userArticles/userAtricles';
import Modal from '../../components/generall/modal/modal';
import InputField from '../../components/generall/inputField/inputField';
import InputArea from '../../components/generall/inputArea/inputArea';
import SubmitButton from '../../components/generall/submitButton/submitButton';
import { useAppDispatch } from '../../store/hooks/redux';
import loadArticleAction from '../../store/actions/loadArticleAction';
import { initialStateObject } from './initalStateObject';
import './userArticle.scss';
import { getCurrentTime } from '../../utils/dateHelpers';
import BrowseFileModal from '../../components/generall/browseFileModal/browseFileModal';
import FormError from '../../components/generall/formError/formError';
const UserArticle = () => {
  const [displayModal, setDispayModal] = useState(false);
  const [displayImageModal, setDispayImageModal] = useState(false);
  const [modalData, setModalData] = useState(initialStateObject);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const handleModal = () => setDispayModal(!displayModal);
  const submit = () => {
    const { author, content, description, title, urlToImage } = modalData;
    const body = {
      author,
      content,
      description,
      title,
      source: { id: '', name: '' },
      url: '',
      publishedAt: getCurrentTime(),
      urlToImage,
    };
    if (
      body.content.length <= 0 ||
      body.title.length <= 0 ||
      body.description.length <= 0 ||
      body.author.length <= 0
    ) {
      setError(true);
      setErrorText('please fill out all fields');
    } else {
      dispatch(loadArticleAction({ article: body, sortBy: null }));
      setModalData(initialStateObject);
      handleModal();
      setError(false);
      setErrorText('');
    }
  };
  const dispatch = useAppDispatch();

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();
    formData.append('image', file as File);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const imageUrl = event.target.result as string;
          setModalData({ ...modalData, urlToImage: imageUrl });
        }
      };
      reader.readAsDataURL(file);
      setDispayImageModal(false);
    }
  };
  const onImageDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    const file = e.dataTransfer.files[0];
    const formData = new FormData();
    formData.append('image', file as File);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const imageUrl = event.target.result as string;
          setModalData({ ...modalData, urlToImage: imageUrl });
        }
      };
      reader.readAsDataURL(file);
      setDispayImageModal(false);
    }
  };

  return (
    <>
      <Modal closeModal={handleModal} open={displayModal} additionalClass={''}>
        <div className="modal-wrapper">
          <FormError errorText={errorText} appear={error} />
          <InputField
            type={'text'}
            name={'author'}
            placeholder="author"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setModalData({ ...modalData, author: e.target.value })
            }
          />
          <InputArea
            textHandler={(value) => {
              setModalData({ ...modalData, content: value });
            }}
            value={modalData.content}
            placeholder={'content'}
          />
          <InputField
            type={'text'}
            name={'description'}
            placeholder="description"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setModalData({ ...modalData, description: e.target.value })
            }
          />
          <InputField
            type={'text'}
            name={'title'}
            placeholder="title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setModalData({ ...modalData, title: e.target.value })
            }
          />
          <SubmitButton
            text={'upload image'}
            onClick={() => {
              setDispayImageModal(!displayImageModal);
            }}
          />
          <SubmitButton text={'add article'} onClick={submit} />
        </div>
      </Modal>
      <BrowseFileModal
        inputFileOnChange={onImageChange}
        inputOnDropEvent={onImageDrop}
        closeModal={() => setDispayImageModal(!displayImageModal)}
        open={displayImageModal}
        inputText={'add article image'}
        multiple={false}
      />
      <ArticleControlls
        handleModal={handleModal}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <UserArticles searchValue={searchValue} />
    </>
  );
};
export default UserArticle;
