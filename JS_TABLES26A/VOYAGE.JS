// VOYAGE.js

window.VOYAGE = {
  "tables": {
    "VOYAGE": {
      "description": "This table contains the world wide vessel schedules. The schedule is updated weekly by a manual upload process. G-Log has subscription to the vessel schedule with ESG (Electronic Shipping Guide) that publishes the information at its site shipguide.com in a dbase4 format. This data is downloaded, converted and populated in the GC3 database.",
      "columns": {
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the voyage."
},
        "VOYAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The unique external identifier for the voyage."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the service provider for the voyage."
},
        "VOYAGE_SERVICE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VOYAGE_SERVICE_TYPE",
          "info": "The GID for the voyage service type. The Voyage Service Type links the voyage with a rate service and rate. The Voyage Service Type ID identifies the voyage service type which must be assigned to at least one rate service. Each voyage schedule must have a voyage service type that is associated with at least one rate service for it to be considered for a shipment."
},
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VESSEL",
          "info": "The GID for the vessel assigned to the voyage. The vessel record contains important information about the vessel like: Owner, Operator, Registry Port, Flag Country, Official Number."
},
        "VOYAGE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the voyage."
},
        "DEP_REGION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The name of the departure region for the voyage."
},
        "ARR_REGION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The voyage's Departure Region name and Arrival Region name are for information only. The Departure and Arrival information is intended to hold the  trade lane level description of the voyage e.g., Asia to North America,  Middle East to Europe."
},
        "DEP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The departure date for the voyage."
},
        "TIME_STAMP": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the record was added."
},
        "DATA_SOURCE_PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Partition key used to parse the data based on the data source."
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The GID for the service provider profile. The service provider profile is on the voyage to support scenarios where multiple ocean carriers have a vessel sharing agreement."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "IS_COMPOSITE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Check box used to identify voyages that are composite voyages i.e., the voyage has a transload point.  Composite Voyages -  A composite voyage is a voyage that takes place using two or more vessels. The main vessel is the 'mother' vessel  and can be identified as such when creating a voyage. This enables you to identify which feeder was from the source port and what is the mother vessel discharging at the destination port on the shipment. A shipment's last departure stop must be before voyage's first transload stop. A shipment's first arrival stop must be after voyage's last transload stop. If a transload shipment has a composite voyage, then it will find all transload stops on its voyage and insert them as transload stops on the shipment. The times from the voyage are copied to shipment stops. If there are multiple transload stops in a voyage, then all the transload stops should be together in the middle of voyage stops."
}
      },
      "fk_tables": [
        "ORDER_RELEASE",
        "QUOTE_COST_OPTION_SHIPMENT",
        "REPETITION_SCHEDULE",
        "SHIPMENT_STOP",
        "VOYLOC"
]
    }
  }
};