// BN_NAMED_RANGE_EVENT.js

window.BN_NAMED_RANGE_EVENT = {
  "tables": {
    "BN_NAMED_RANGE_EVENT": {
      "description": "Defines threshold for different levels of depletion warnings.",
      "columns": {
        "BN_NAMED_RANGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BN_NAMED_RANGE",
          "info": "The identifier of the named range to which this warning level applies."
},
        "WARNING_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true,
          "info": "The depletion warning level."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The description of the warning level."
},
        "WARNING_THRESHOLD": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Determines when a depletion warning is raised.  An event is raised if the available numbers in the range fall below the threshold."
},
        "MAX_WARNING_EVENTS": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The maximum number of events to be raised for this level or warning."
},
        "ACTUAL_WARNING_EVENTS_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The actual number of events raised.   The number is reset when the named range is modified by adding the new ranges or updating existing ranges."
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
      "fk_tables": []
    }
  }
};