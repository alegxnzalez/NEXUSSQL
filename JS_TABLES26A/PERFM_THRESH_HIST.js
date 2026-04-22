// PERFM_THRESH_HIST.js

window.PERFM_THRESH_HIST = {
  "tables": {
    "PERFM_THRESH_HIST": {
      "description": "Definition of a historical statistic. Used both to define a historical metric to check and the threshold we may check it against.",
      "columns": {
        "PERFM_THRESH_HIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PERFM_THRESH_HIST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "HIST_VALUE_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "AVERAGE",
                    "MAX",
                    "COUNT"
          ],
          "info": "Statistic type: average, max or count."
},
        "HIST_VALUE_INTERVAL": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "HOUR",
                    "DAY",
                    "WEEK",
                    "DOW"
          ],
          "info": "Historical duration: hour, days, weeks or days of week."
},
        "HIST_VALUE_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of historical intervals to use for the statistic."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If ''Y'', the record is reserved for use with OTM staged thresholds. It cannot be edited or removed by a user."
},
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
}
      },
      "fk_tables": [
        "PERFM_THRESH_CUMULATIVE",
        "PERFM_THRESH_CURRENT"
]
    }
  }
};