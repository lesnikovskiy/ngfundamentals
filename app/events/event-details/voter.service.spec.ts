import { VoterService } from "./voter.service";
import { ISession } from "../shared/session.model";
import { Observable } from "rxjs/Rx";

describe("VoterService", () => {
    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]);
        voterService = new VoterService(mockHttp);
    });
     

    it("deleteVoter", () => {
        it("should remove the voter from the list of voters", () => {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(3, <ISession>session, "joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("joh");
        });
    });
});