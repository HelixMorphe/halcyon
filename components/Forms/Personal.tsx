import React, { useEffect } from "react";
import { Input } from "../ui/input";
import useResumeStore from "../../lib/store/resume";
import { Textarea } from "../ui/textarea";
import { TypographyMuted, TypographyP } from "../ui/Typography";
const Personal = () => {
  const jobTitle = useResumeStore(
    (state) => state.resume.personalDetails.jobTitle
  );
  const firstName = useResumeStore(
    (state) => state.resume.personalDetails.firstName
  );
  const lastName = useResumeStore(
    (state) => state.resume.personalDetails.lastName
  );
  const email = useResumeStore((state) => state.resume.personalDetails.email);
  const phone = useResumeStore((state) => state.resume.personalDetails.phone);
  const bio = useResumeStore((state) => state.resume.personalDetails.bio);
  const personalDetails = useResumeStore(
    (state) => state.resume.personalDetails
  );

  const setPersonalDetails = useResumeStore(
    (state) => state.setPersonalDetails
  );
  useEffect(() => {
    console.log({ personalDetails });
  }, [personalDetails]);
  return (
    <div className="px-8 pb-8 pt-6">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        <div className="col-span-2">
          <TypographyMuted>Job Title</TypographyMuted>
          <Input
            value={jobTitle}
            onChange={(e) =>
              setPersonalDetails({
                ...personalDetails,
                jobTitle: e.target.value,
              })
            }
            placeholder="Job Title"
          />
        </div>
        <div>
          <TypographyMuted>First Name</TypographyMuted>
          <Input
            value={firstName}
            onChange={(e) =>
              setPersonalDetails({
                ...personalDetails,
                firstName: e.target.value,
              })
            }
            placeholder="First name"
            className=""
          />
        </div>
        <div>
          <TypographyMuted>Last Name</TypographyMuted>
          <Input
            value={lastName}
            onChange={(e) =>
              setPersonalDetails({
                ...personalDetails,
                lastName: e.target.value,
              })
            }
            placeholder="Last name"
            className=""
          />
        </div>
        <div>
          <TypographyMuted>Email</TypographyMuted>
          <Input
            value={email}
            onChange={(e) =>
              setPersonalDetails({
                ...personalDetails,
                email: e.target.value,
              })
            }
            placeholder="E-mail"
            className=""
          />
        </div>
        <div>
          <TypographyMuted>Phone</TypographyMuted>
          <Input
            value={phone}
            onChange={(e) =>
              setPersonalDetails({
                ...personalDetails,
                phone: e.target.value,
              })
            }
            placeholder="Phone"
            className=""
          />
        </div>
        <div className="col-span-2">
          <TypographyMuted>Short bio</TypographyMuted>
          <Textarea
            className="placeholder:text-slate-400"
            placeholder="eg: I am a marketing professional with 5 years' experience, excelling in social media management, known for adaptability and problem-solving."
            value={bio}
            onChange={(e) =>
              setPersonalDetails({
                ...personalDetails,
                bio: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
