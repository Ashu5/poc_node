var express = require('express');
var app = express();

// SHOW LIST OF USERS
app.get('/getdata', function(req, res, next) {
	req.getConnection(function(error, conn) {
		conn.query('SELECT * FROM gfdata ORDER BY id DESC',function(err, rows, fields) {
			//if(err) throw err
			if (err) {
				req.flash('error', err)
				
			} else {
				res.send(rows);
			console.log(rows);

			}
		})
	})
})




// ADD NEW USER POST ACTION
app.post('/insertdata', function(req, res, next){	
	
var data =
	[{
		"reportName": "Annual Tax Report",
		"reportCategroy": "Category",
		"reportSubCategroy": "Category",
		"reportStatus": "Init",
		"validationBy": "hello ",
		"date": "asd",
		"comment": "asd",
		"priName": "Afghanistan",
		"priGrantName": "AFG-H-UNDP",
		"priGrantDieases": "HIV/AIDS",
		"priGrantCurrency": "USD",
		"priLocalCurrency": "AFN",
		"priRecipientName": "United Nations Development Programme",
		"taxExemptRecipientLevel": "Both",
		"taxExemptSubPrincipleLevel": "Both",
		"taxExemptOverAll": "Full Exemption",
		"taxPaidSubRecipient": "10612",
		"taxPaidTotal": "10612",
		"taxUnRecoveredSubRecipient": "10612",
		"taxUnRecoveredTotal": "10612",
		"reportId": 3
	}, {
		"reportName": "Annual Tax Report",
		"reportCategroy": "Category",
		"reportSubCategroy": "Category",
		"reportStatus": "Init",
		"validationBy": "Hemant BY",
		"priName": "Afghanistan",
		"priGrantName": "AFG-H-UNDP",
		"priGrantDieases": "HIV/AIDS",
		"priGrantCurrency": "USD",
		"priLocalCurrency": "AFN",
		"priRecipientName": "United Nations Development Programme",
		"taxExemptRecipientLevel": "Both",
		"taxExemptSubPrincipleLevel": "Both",
		"taxExemptOverAll": "Full Exemption",
		"taxPaidSubRecipient": "10612",
		"taxPaidTotal": "10612",
		"taxUnRecoveredSubRecipient": "10612",
		"taxUnRecoveredTotal": "10612",
		"reportId": 4
	}, {
		"reportName": "Annual Tax Report",
		"reportCategroy": "Category",
		"reportSubCategroy": "Category",
		"reportStatus": "Init",
		"priName": "Afghanistan",
		"priGrantName": "AFG-H-UNDP",
		"priGrantDieases": "HIV/AIDS",
		"priGrantCurrency": "USD",
		"priLocalCurrency": "AFN",
		"priRecipientName": "United Nations Development Programme",
		"taxExemptRecipientLevel": "Both",
		"taxExemptSubPrincipleLevel": "Both",
		"taxExemptOverAll": "Full Exemption",
		"taxPaidSubRecipient": "10612",
		"taxPaidTotal": "10612",
		"taxUnRecoveredSubRecipient": "10612",
		"taxUnRecoveredTotal": "10612",
		"reportId": 5
	}, {
		"reportName": "Annual Tax Report",
		"reportCategroy": "Category",
		"reportSubCategroy": "Category",
		"reportStatus": "Init",
		"priName": "Afghanistan",
		"priGrantName": "AFG-H-UNDP",
		"priGrantDieases": "HIV/AIDS",
		"priGrantCurrency": "USD",
		"priLocalCurrency": "AFN",
		"priRecipientName": "United Nations Development Programme",
		"taxExemptRecipientLevel": "Both",
		"taxExemptSubPrincipleLevel": "Both",
		"taxExemptOverAll": "Full Exemption",
		"taxPaidSubRecipient": "10612",
		"taxPaidTotal": "10612",
		"taxUnRecoveredSubRecipient": "10612",
		"taxUnRecoveredTotal": "10612",
		"reportId": 6
	}, {
		"reportName": "Annual Tax Report",
		"reportCategroy": "Category",
		"reportSubCategroy": "Category",
		"reportStatus": "Init",
		"priName": "Afghanistan",
		"priGrantName": "AFG-H-UNDP",
		"priGrantDieases": "HIV/AIDS",
		"priGrantCurrency": "USD",
		"priLocalCurrency": "AFN",
		"priRecipientName": "United Nations Development Programme",
		"taxExemptRecipientLevel": "Both",
		"taxExemptSubPrincipleLevel": "Both",
		"taxExemptOverAll": "Full Exemption",
		"taxPaidSubRecipient": "10612",
		"taxPaidTotal": "10612",
		"taxUnRecoveredSubRecipient": "10612",
		"taxUnRecoveredTotal": "10612",
		"reportId": 7
	}, {
		"reportName": "Annual Tax Report",
		"reportCategroy": "Category",
		"reportSubCategroy": "Category",
		"reportStatus": "Init",
		"priName": "Afghanistan",
		"priGrantName": "AFG-H-UNDP",
		"priGrantDieases": "HIV/AIDS",
		"priGrantCurrency": "USD",
		"priLocalCurrency": "AFN",
		"priRecipientName": "United Nations Development Programme",
		"taxExemptRecipientLevel": "Both",
		"taxExemptSubPrincipleLevel": "Both",
		"taxExemptOverAll": "Full Exemption",
		"taxPaidSubRecipient": "10612",
		"taxPaidTotal": "10612",
		"taxUnRecoveredSubRecipient": "10612",
		"taxUnRecoveredTotal": "10612",
		"reportId": 8
	
	}];
		var coulums=[`id`, `reportName`, `reportCategroy`, `reportSubCategroy`, `reportStatus`, `reportDate`, `validationBy`, `date`, `comment`, `priName`, `priGrantName`, `priGrantDieases`, `priGrantCurrency`, `priLocalCurrency`, `priRecipientName`, `taxExemptRecipientLevel`, `taxExemptSubPrincipleLevel`, `taxExemptOverAll`, `taxExemptComment`, `reportingYear`, `taxPaidRecipient`, `taxPaidSubRecipient`, `taxPaidTotal`, `taxRecoveredRecipient`, `taxRecoveredSubRecipient`, `taxRecoveredTotal`, `taxUnRecoveredRecipient`, `taxUnRecoveredSubRecipient`, `taxUnRecoveredTotal`, `expenditureRecipient`, `expenditureSubRecipient`, `expenditureTotal`, `taxInfocomment`];
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO  gfdata SET ?', data, function(err, result) {
				
				if (err) {
					req.send('error', err)
					
					
				} else {				
					req.send('success', 'Data added successfully!')
					
				
				}
			})
		})
	
	
})



module.exports = app
