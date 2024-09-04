import { FormEvent } from "react";

import { getCurrentDate, getMaximumEndDateValue } from "../../../utils";
import { ITrip } from "../../../types";
import {
  TextInput,
  NumberInput,
  DateInput,
  RadioInput,
  TextButton,
  PrimaryButton,
  Checkbox,
} from "../../../common-components";
import { INTERESTS_OPTIONS, MODE_OF_TRANSPORT_OPTIONS } from "../../../consts";

interface Props {
  tripPlan: ITrip;
  onChangeTripValue: (key: string, value: string | string[]) => void;
  onResetClick: () => void;
  onGetTripItinerary: () => void;
}

export const TripPlannerForm = ({
  tripPlan,
  onChangeTripValue,
  onResetClick,
  onGetTripItinerary,
}: Props) => {
  const {
    destination,
    startDate,
    endDate,
    numOfTravellers,
    modeOfTransport,
    interests,
  } = tripPlan;

  const isSubmitButtonDisabled =
    destination === "" || startDate === "" || endDate === "";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGetTripItinerary();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Enter your trip details
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be used to generate your trip itinerary.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <TextInput
                label="Destination (City / Country)"
                id="destination"
                type="text"
                value={destination}
                required
                onChange={(value) => onChangeTripValue("destination", value)}
              />
            </div>

            <div className="sm:col-span-3">
              <NumberInput
                label="Number of travellers"
                id="number-of-travellers"
                value={numOfTravellers}
                min={1}
                required
                onChange={(value) =>
                  onChangeTripValue("numOfTravellers", value)
                }
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <DateInput
                label="Start date"
                id="start-date"
                value={startDate}
                min={getCurrentDate()}
                required
                onChange={(value) => onChangeTripValue("startDate", value)}
              />
            </div>

            <div className="sm:col-span-3">
              <DateInput
                label="End date"
                id="end-date"
                value={endDate}
                min={startDate}
                max={getMaximumEndDateValue(startDate)}
                required
                onChange={(value) => onChangeTripValue("endDate", value)}
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Extra information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will help us to create a more personalized trip
            itinerary.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Mode of transportation
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                How will you be travelling to your destination?
              </p>
              <div className="mt-6 space-y-6">
                {MODE_OF_TRANSPORT_OPTIONS.map((option) => (
                  <RadioInput
                    key={option.id}
                    label={option.label}
                    id={option.id}
                    value={modeOfTransport}
                    onChange={(value) =>
                      onChangeTripValue("modeOfTransport", value)
                    }
                  />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                What are your interests?
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Which activities do you want to focus on in your travel plan?
              </p>
              <div className="mt-6 space-y-6">
                {INTERESTS_OPTIONS.map((option) => (
                  <Checkbox
                    key={option.id}
                    value={interests}
                    label={option.label}
                    id={option.id}
                    onChange={(value) => onChangeTripValue("interests", value)}
                  />
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <TextButton text="Reset" onClick={onResetClick} type="button" />
        <PrimaryButton
          text={"Start your adventure"}
          isDisabled={isSubmitButtonDisabled}
          type="submit"
        />
      </div>
    </form>
  );
};
