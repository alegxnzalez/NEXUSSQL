// MONITOR_AGENT.js

window.MONITOR_AGENT = {
  "tables": {
    "MONITOR_AGENT": {
      "description": "A Monitor_Agent has state reflecting the events of interest of the Monitor_Agent's Agent specified.  A Monitor_Agent is an abstraction of several types of specialized agents.  They are Planned, Unplanned, Exception, Execution, and Assignment.  These are specified by the Montor_Agent_Type_GID reference to the Monitor_Agent_Type table.  A Monitor_Agent belongs to a Monitor Profile and therefore can't be 'shared' among Monitor Profiles.  I.e. each Monitor_Agent_GID is unique.  Note: a Monitor Agent belonging to a Monitor Profile Template is referred to as a Monitor Agent Template.  Similar to a Monitor Profile 'instance' is created from a Monitor Profile Template, a Monitor Agent 'instance' is created from a Monitor Agent Template.",
      "columns": {
        "MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique identifier for a monitor agent.  If this is a monitor agent belonging to a monitor profile template, then this is the concatentation fo the monitor_agent_xid, '-', and the domain_name.  If this monitor agent belongs to a monitor profile, then the xid is generated and guaranteed to be unique."
},
        "MONITOR_AGENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for the monitor agent."
},
        "MONITOR_AGENT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text, as entered by the user, for familiar reference."
},
        "MONITOR_AGENT_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Null if this is a monitor agent template -or- The GID for the monitor agent template from which this monitor agent instance was created."
},
        "MONITOR_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MONITOR_PROFILE",
          "info": "The monitor profile to which this monitor agent belongs."
},
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AGENT",
          "info": "Specifies the agent used to listen for events and perform actions."
},
        "MONITOR_AGENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MONITOR_AGENT_TYPE",
          "info": "The unique identifier (foreign key) into the Monitor_Agent_Type table.  Types of Agents are MonitorPlannedAgent, MonitorUnplannedAgent, MonitorExceptionAgent, MonitorExecutionAgent, and MonitorAssignmentAgent"
},
        "IS_RECORD_EVENT": {
          "type": "CHAR(1)",
          "nullable": false
},
        "IS_PERFORM_AGENT_ACTION": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "'Y' if the monitor agent is to perform its agent's actions after receiving an event of interest."
},
        "OCCURRENCE_COUNT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The number of events received by this agent."
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Used for a MonitorPlannedAgent only.  Optionally for a 'Template' type, Has the expiration date and time specified if, during the definition, the user wants to specify a specific date and time for this Agent to evaluate to true.  For example, 12/31/01 11:59:59    OR Has the expiration time specified (no date) if, during definition, the user wants to specify a time, where the date gets determined during execution.  For example, 5:00pm and when the assignment takes place, the instance will specify the date, for example, 9/2/02 5:00pm.    OR    NULL if the expiration date and time will be determined by the dependency service during execution.    .  Optionally for an 'instance' type,    Has the expiration date and time specified if, during the definition, the user specified a specific date and time for this Agent to evaluate to true.  For example, 12/31/01 11:59:59    OR Has the expiration time specified  with the calculated date from execution.  For example, 5:00pm and when the assignment takes place, the instance will specify the date, for example, 9/2/02 5:00pm.    OR    Date and Time determined by the dependency service during execution"
},
        "LAST_EVENT_OCCUR_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Null for a 'Template' type OR The date and time the event occurred for the event most recently received by this agent which the query conditions evaluated to true and has its IS_RECORD_EVENT = true."
},
        "LAST_EVENT_RECEIVED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Null for a 'Template' type OR The date and time the event was received for the event most recently received by this agent which the query conditions evaluated to true and has its IS_RECORD_EVENT = true."
},
        "TIME_RESET_OFFSET": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For a MonitorPlannedAgent only.  The duration, in hours, to which to offset an expiration date.  For example, if this agent receives a time event of interest, after performing its action(s), it resets its expiration date to it expiration date + the Time_Reset_Offset and subscribes a workflow trigger to listen for the specified expiration date as an event."
},
        "TIME_RESET_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for TIME_RESET_OFFSET column."
},
        "TIME_RESET_OFFSET_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "TIME_RESET_OFFSET in base units."
},
        "CONTEXT_OFFSET": {
          "type": "NUMBER",
          "nullable": true
},
        "CONTEXT_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "CONTEXT_OFFSET_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "CONTEXT_OFFSET in base units."
},
        "CONTEXT_BASED_ON": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_MANDATORY": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "'Y' indicates that an event of interest to this agent must be received at least once during its 'life'.  Its life is determined to be 'over' when the 'final' agent has received an event. -OR 'N' indicates that it is required that the Agent does not receive an event during its 'life'."
},
        "IS_INIT_EXPIRATION_DATE": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "When a Monitor Profile is initially assigned to a Business Object, subscribe a workflow trigger to listen for the specified expiration date as an event.  Note this is for a MonitorPlannedAgent only. 'Y' indicates that when this MonitorTimerAgent is assigned, it uses the event's date and time as the base to initially calculate its expiration date.  For example, if this agent is assigned by an event whose date/time occurred 9/01/02 9:00am, and this agents Time_Reset_Offset is 2hrs, then the expiration date is set for 9/01/02 11:00am when assigned to a Business Object."
},
        "IS_FIRST_MONITORED_EVENT": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "'Y' if this agent is the first Monitor Planned, and 'N' if this agent is not the first Monitor Planned Agent."
},
        "IS_LAST_MONITORED_EVENT": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "'Y' if this agent is the agent in which when an event is received, it is considered to be the 'last' event to be received by its Monitor Profile.  When this occurs, its 'life' is considered over."
},
        "MAX_OCCURRENCE_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum number of times that the event should be recorded.  If the number of occurrences exceeds this number, an exception will be raised.  If no there is no desired maximum, then this field should be null."
},
        "PROCESS_CONTROL_REQUEST_ID": {
          "type": "NUMBER",
          "nullable": true,
          "info": "If this monitor agent is a monitor planned agent type, and it has a Time Expiration set, the Process Control Request ID is the identifier of the MonitorShipmentTimeBasedEvent published for this Monitor Planned Agent."
},
        "IS_REASSIGN_MONITOR_PROFILE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DISPLAY_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_DISABLED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "REPLICATION_CRITERIA_FROM": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "REPLICATION_CRITERIA_WHERE": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "PREVIOUS_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true
},
        "MONITORED_OBJECT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Gid of the object that is being monitored"
},
        "LAST_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status code of the last event monitored by this agent"
},
        "LAST_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "Reason code of the last event monitored by this agent"
},
        "CONTEXT_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "The saved query gid when the based on offset = SQLQuery"
},
        "TOLERANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_TOLERANCE_RULE",
          "info": "Tolerance rule for a planned milestone."
},
        "IS_TOLERANCE_RULE_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_RELATED_PROFILING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If 'Y' , the event received on planned milestone will trigger related profiling."
},
        "REPLICATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The type that the monitor agent is replicate for, such as Equipment, Stop."
},
        "REPLICATION_PARAMETER": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The detail information of the replication type.  e.g. For Replication_Type='STOP', Replication_Parameter is '-stop_number 1 -location_gid PHL'"
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
        "MONITOR_AGENT_EVENT",
        "MONITOR_AGENT_LINK"
]
    }
  }
};