import Entity from "src/core/adapters/store";

interface Article {
    articleId: string,
    articleName: string,
    moduleTypeCode: string,
    articleBackground: string,
    articleIcon: string,
    articleTag: string,
    articleDisplayDate: 0,
    articleRelatednewDisplay: 0,
    articleLanguageImage: string,
    articleLanguageThumbnail: string,
    articleLanguageLink: string,
    articleIdLink: string,
    articleLanguageTitle: string,
    articleLanguageContent: string,
    articleLanguageContent2: string,
    articleLanguageContent3: string,
    articleLanguageDescription: string,
    articleLanguageSpecitalCharacter: string,
    languageCode: string,
    articleLanguageTag: string,
    articleLanguageFromDay: string,
    articleLanguageToDay: string,
    articleLanguageDeparture: string,
    articleLanguageDestination: string,
    articleLanguageCurrentcy: string,
    articleLanguageMoney: 0,
    articleLanguageRouteType: string,
    articleLanguageLinkInternal: 0
}

class User extends Entity<Article>{
    constructor(user) {
        super(user)
    }

    static createListUsers(listUsers): Array<User> {
        return listUsers.map(item => {
            return new User(item)
        })
    }

    get articleId() {
        return this.props.articleId || ''
    }
    get articleName() {
        return this.props.articleName || ''
    }
    get moduleTypeCode() {
        return this.props.moduleTypeCode || ''
    }
    get articleBackground() {
        return this.props.articleBackground || ''
    }
    get articleIcon() {
        return this.props.articleIcon || ''
    }
    get articleTag() {
        return this.props.articleTag || ''
    }
    get articleDisplayDate() {
        return this.props.articleDisplayDate || ''
    }
    get articleRelatednewDisplay() {
        return this.props.articleRelatednewDisplay || ''
    }
    get articleLanguageImage() {
        return this.props.articleLanguageImage || ''
    }
    get articleLanguageThumbnail() {
        return this.props.articleLanguageThumbnail || ''
    }
    get articleLanguageLink() {
        return this.props.articleLanguageLink || ''
    }
    get articleIdLink() {
        return this.props.articleIdLink || ''
    }
    get articleLanguageTitle() {
        return this.props.articleLanguageTitle || ''
    }
    get articleLanguageContent() {
        return this.props.articleLanguageContent || ''
    }
    get articleLanguageContent2() {
        return this.props.articleLanguageContent2 || ''
    }
    get articleLanguageContent3() {
        return this.props.articleLanguageContent3 || ''
    }
    get articleLanguageDescription() {
        return this.props.articleLanguageDescription || ''
    }
    get articleLanguageSpecitalCharacter() {
        return this.props.articleLanguageSpecitalCharacter || ''
    }
    get languageCode() {
        return this.props.languageCode || ''
    }
    get articleLanguageTag() {
        return this.props.articleLanguageTag || ''
    }
    get articleLanguageFromDay() {
        return this.props.articleLanguageFromDay || ''
    }
    get articleLanguageToDay() {
        return this.props.articleLanguageToDay || ''
    }
    get articleLanguageDeparture() {
        return this.props.articleLanguageDeparture || ''
    }
    get articleLanguageDestination() {
        return this.props.articleLanguageDestination || ''
    }
    get articleLanguageCurrentcy() {
        return this.props.articleLanguageCurrentcy || ''
    }
    get articleLanguageMoney() {
        return this.props.articleLanguageMoney || ''
    }
    get articleLanguageRouteType() {
        return this.props.articleLanguageRouteType || ''
    }
    get articleLanguageLinkInternal() {
        return this.props.articleLanguageLinkInternal || ''
    }
}

export default User