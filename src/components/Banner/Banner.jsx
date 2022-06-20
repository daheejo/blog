import {
    BannerContainer,
    BannerContents,
    SubText,
    MainText,
    Description,


} from './Banner.elements'

export default function Banner(){
    return (
        <BannerContainer>
			<div class="max-width">
				<BannerContents>
                    <SubText>React Blog</SubText>
                    <MainText>My BLOG</MainText>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est</Description>
				</BannerContents>
			</div>
		</BannerContainer>
    )
}