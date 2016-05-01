import React from 'react';

const Score = ({
	score,
	username
}) => (
	<section id="scores">
		<h3>Score</h3>
		<table>
			<thead>
				<tr>
					<th>{username}</th>
					<th>High AI</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{score.player}</td>
					<td>{score.computer}</td>
				</tr>
			</tbody>
		</table>
	</section>
);

Score.propTypes = {
	score: React.PropTypes.object.isRequired,
	username: React.PropTypes.string.isRequired
};

export default(
	Score
);

<table>
  <thead>
    <tr>
      <th width="200">Table Header</th>
      <th>Table Header</th>
      <th width="150">Table Header</th>
      <th width="150">Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <td>Content Goes Here</td>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
</table>
