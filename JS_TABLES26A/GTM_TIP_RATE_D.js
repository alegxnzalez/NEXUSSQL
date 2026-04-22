// GTM_TIP_RATE_D.js

window.GTM_TIP_RATE_D = {
  "tables": {
    "GTM_TIP_RATE_D": {
      "description": "Table stores the duration for which the Rate is applicable and the Rate percentage.",
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "GTM_TIP_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_RATE",
          "info": "GID of GTM Trade Incentive Program Rate"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number"
},
        "FROM_DURATION_YEARS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Years of the start duration"
},
        "FROM_DURATION_MONTHS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Months of the start duration"
},
        "TO_DURATION_YEARS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Years of the end duration"
},
        "TO_DURATION_MONTHS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Months of the end duration"
},
        "RATE_PERCENTAGE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Rate in Percent"
},
        "FROM_DURATION_DAYS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Days of the start duration"
},
        "TO_DURATION_DAYS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Days of the end duration"
}
      },
      "fk_tables": []
    }
  }
};