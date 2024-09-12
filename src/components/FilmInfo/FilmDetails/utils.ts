import { ITeamMember } from "../../../interfaces/interfaces";

const getTeamMemberFormatter = (crew: ITeamMember[], job: string) => {
    const members = crew.filter(member => member.job === job)
    const membersFormatted = members.map(member => member.name).join(', ');

    return membersFormatted;
}

export { getTeamMemberFormatter }