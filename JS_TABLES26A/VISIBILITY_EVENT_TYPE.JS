// VISIBILITY_EVENT_TYPE.js

window.VISIBILITY_EVENT_TYPE = {
  "tables": {
    "VISIBILITY_EVENT_TYPE": {
      "columns": {
        "VISIBILITY_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for the event type"
},
        "VISIBILITY_EVENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Xid  for event type"
},
        "EVENT_GROUP_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Event group classification for the event type"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "A short description for the event type"
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
        "VISIBILITY_EVENT",
        "VISIBILITY_PIECE"
]
    }
  }
};