import React from 'react'
import JobBox from '../components/JobBox'
import EnergyConservedByEachServiceTypeInWeek from '../components/EnergyConservedByEachServiceTypeInWeek'
import ReductionCarbonEmissionsGreenhouseGas from '../components/ReductionCarbonEmissionsGreenhouseGas'
import PercentageWasteCategoryDistribution from '../components/PercentageWasteCategoryDistribution'
import VolumeWasteCollectedForEachService from '../components/VolumeWasteCollectedForEachService'
import WeeklyJobCompletionTrend from '../components/WeeklyJobCompletionTrend'
import TotalVolumeWasteCollected from '../components/TotalVolumeWasteCollected'
import TotalVolumeOfWasteCollectedByCategoryAcrossWeeks from '../components/TotalVolumeOfWasteCollectedByCategoryAcrossWeeks'
export default function Dashboard() {
	return (
		<div className="container mx-auto sm-auto sm-auto px-8 py-4 drop-shadow-md">
			<div className='py-4'><JobBox /></div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<div><TotalVolumeWasteCollected /></div>
			<div><VolumeWasteCollectedForEachService /></div>
			<div><WeeklyJobCompletionTrend /></div>
			<div><PercentageWasteCategoryDistribution /></div>
			<div><EnergyConservedByEachServiceTypeInWeek /></div>
			<div><TotalVolumeOfWasteCollectedByCategoryAcrossWeeks /></div>
			</div>
			<div className="grid gap-4 grid-rows-1 py-4">
			<div><ReductionCarbonEmissionsGreenhouseGas /></div>
			</div>
			
			
		</div>
	)
}