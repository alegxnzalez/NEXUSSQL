// P_BID_ROUND.js

window.P_BID_ROUND = {
  "tables": {
    "P_BID_ROUND": {
      "description": "Represents a bidding round within a project",
      "columns": {
        "P_BID_ROUND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "P_BID_ROUND_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "P_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "P_PROJECT",
          "info": "Sequence of the bid round: 1, 2, ..."
},
        "OPEN_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date/time that bidding starts - no bids accepted before this date"
},
        "CLOSE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date/time that bidding ends - no bids accepted after this date"
},
        "SELECTED_SOLUTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The solution selected by the user for this bid round"
},
        "P_BID_ROUND_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false
},
        "CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSTRAINT_SET"
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
},
        "CRT_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_CRT_CONFIG"
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "This column will identify the rows which will be purged"
}
      },
      "fk_tables": [
        "CRT_LOAD_PROCESS",
        "P_BID",
        "P_BID_ROUND_STATUS",
        "P_SOLUTION"
]
    }
  }
};