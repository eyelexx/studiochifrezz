import React, { useEffect } from 'react'
import Image from 'next/image'

import * as S from '../../../styles/project.styles'

interface ModalProps {
  modal: { isOpen: boolean; image: string }
  closeModal: () => void
  handlePreviousImage: () => void
  handleNextImage: () => void
}

const ProjectModal: React.FC<ModalProps> = ({ modal, closeModal, handlePreviousImage, handleNextImage }) => {
  if (!modal.isOpen) return null

  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePreviousImage()
    } else if (event.key === 'ArrowRight') {
      handleNextImage()
    } else if (event.key === 'Escape') {
      closeModal()
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [handlePreviousImage, handleNextImage, closeModal])

  return (
    <S.Modal onClick={closeModal}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ArrowButton className="left" onClick={handlePreviousImage}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"></path>
            </g>
          </svg>
        </S.ArrowButton>
        <Image src={modal.image} alt="Imagem em destaque" width={1200} height={800} />
        <S.ArrowButton className="right" onClick={handleNextImage}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"></path>
            </g>
          </svg>
        </S.ArrowButton>
        <button className="closeButton" onClick={closeModal}>
          X
        </button>
      </S.ModalContent>
    </S.Modal>
  )
}

export default ProjectModal
