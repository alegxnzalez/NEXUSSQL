// MONITOR_AGENT_LINK.js

window.MONITOR_AGENT_LINK = {
  "tables": {
    "MONITOR_AGENT_LINK": {
      "description": "This is the link for a specific dependency service between two Monitor Planned Agents.",
      "columns": {
        "MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MONITOR_AGENT",
          "info": "Part of the composite primary key. It is a foreign key reference back to the Monitor Agnet 'predecessor' in this link."
},
        "MONITOR_AGENT_SUCC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Part of the composite primary key.  It is a foreign key reference back to the monitor agent 'successor' in this link."
},
        "DEPENDENCY_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DEPENDENCY_SERVICE",
          "info": "Part of the composite primary key.  It is a foreign key reference back to the dependency_service table indicating which type of dependency service this is for this link."
},
        "MONITOR_AGENT_LINK_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "info": "If more than one link for each Monitor_Agent, Monitor_Agent_Successor, this specifies the process order for the Monitor Profile to process these dependency service links.  For example, if deactivate and a Time_Link links are between the same Monitor_Agent, Monitor_Agent_Successor, it result will be different if deactivate is processed first or second."
},
        "DURATION_OFFSET": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Only for Time_Link, and is optional.  If set, it will add the duration_offset, which is specified in hours, to the Monitor_Agent_Successor's expiration Date."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Only for a Time_Link, and is optional, For a template, it has the expiration date and time specified if, during the definition, the user wants to specify a specific date and time for the Monitor Agent Successor to be set to evaluate to true.  For example, 12/31/01 11:59:59 -or-  It has the expiration time specified (no date) if, during definition, the user wants to specify a time, where the date gets determined during execution.  For example, 5:00pm and when the assignment takes place, the instance will specify the date, for example, 9/2/02 5:00pm. -OR NULL if the expiration date and time will NOT be determined by the dependency service during execution but by the MonitorTimeAgent."
},
        "RECORDED_EVENT_OCCUR_LIMIT": {
          "type": "NUMBER",
          "nullable": true
},
        "DURATION_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for DURATION_OFFSET column."
},
        "DURATION_OFFSET_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "DURATION_OFFSET in base units."
},
        "BASED_ON": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "MONITOR_BUSINESS_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_BUSINESS_FUNCTION"
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY"
},
        "USE_CALENDAR_HOURS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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