import styled from "styled-components";
import { CardInterface } from "@/interfaces";
import Image from "next/image";

interface CardImgProps {
    link: CardInterface;
}

// ToDo: Image 컴포넌트 사용시 styled-components에서 width, height를 지정할 수 있는지 알아봐야할것
const CardImg = ({ link }: CardImgProps) => {
    return (
        <Wrapper>
            {link.imageSource ? (
                <CardMainImg src={link.imageSource} alt="카드 이미지" />
            ) : (
                <CardMainImg
                    src="/images/no_image_source.svg"
                    alt="이미지가 없음"
                />
            )}
            <StarButton type="button">
                <Image
                    src="/images/star.svg"
                    alt="즐겨찾기 별 이미지"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </StarButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 205px;
    overflow: hidden;
    position: relative;
`;

export const CardMainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.1s;
`;

const StarButton = styled.button`
    width: 34px;
    height: 34px;
    position: absolute;
    top: 15px;
    right: 15px;
`;

export default CardImg;
