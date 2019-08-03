import React from 'react';

import styled from '@emotion/styled';

import { chromaticScaleEnharmonic, chromaticScaleFull, intervalLookupObject } from "../staticData/musicTheory";
import { playChord, tonifyNote, prettifyNote } from "../helpers/helpers";

const Chord = styled.div`
  height: 150px;
  box-sizing: border-box;
  border: 1px solid #f6f6f6;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ChordTile = (props) => {
  const { chordDetails, chordName } = props.chordInfo;
  const { currentKey, accidental, octave, toneBuffer, instrument } = props;
  const { intervals, intervalArray } = chordDetails;

  const startingKey = `${currentKey}${accidental}`;
  const startingKeyWithOctave = `${currentKey}${accidental}${octave}`;
  const chromaticScaleInCurrentOctave = chromaticScaleFull(octave);
  const chromaticScaleEnharmonicInCurrentOctave = chromaticScaleEnharmonic(octave);

  const findStartingNote = (scale, key) => scale.filter(note => note.includes(key))[0];
  const findStartingIndex = (scale, note) => scale.indexOf(note);
  const createChord = (scale, startingIndex, intervals) => [scale[startingIndex], ...intervals.map(interval => scale[startingIndex + interval])]
  const getChordNotes = (intervalArray, intervalLookupObject, keySanitisedForIntervalLookup) => intervalArray.map(interval => intervalLookupObject[keySanitisedForIntervalLookup][interval]);

  const startingNote = findStartingNote(chromaticScaleInCurrentOctave, startingKeyWithOctave);
  const startingIndex = findStartingIndex(chromaticScaleInCurrentOctave, startingNote);
  const chordNotes = createChord(chromaticScaleEnharmonicInCurrentOctave, startingIndex, intervals);
  const keySanitisedForIntervalLookup = startingKey.replace("#", "s");
  const prettifiedRootNote = prettifyNote(startingKey);
  const chordNoteNames = getChordNotes(intervalArray, intervalLookupObject, keySanitisedForIntervalLookup);
  const musicallyCorrectNotes = [prettifiedRootNote, ...chordNoteNames];

  return (
    <Chord>
      {chordName}<br />
      {musicallyCorrectNotes && musicallyCorrectNotes.map(note => note + ',')}
      <button onClick={() => playChord(toneBuffer, instrument, chordNotes, '2n')}>Play Chord</button>
    </Chord>
  )
}

export default ChordTile;
