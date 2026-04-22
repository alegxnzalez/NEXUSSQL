// TRACKING_LOCATION_RT_D.js

window.TRACKING_LOCATION_RT_D = {
  "tables": {
    "TRACKING_LOCATION_RT_D": {
      "columns": {
        "TRACKING_LOCATION_RT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRACKING_LOCATION_RT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID.Refers column TRACKING_LOCATION_RT. TRACKING_LOCATION_RT_GID."
},
        "SEQ_NO": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true,
          "info": "Indicates the sequence of the tracking locations within the tracking location route template."
},
        "TRACKING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "This should refer LOCTION Table and the column to refer is LOCATION.LOCATION_GID."
},
        "WHERE_TO": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
                    "BS",
                    "SD",
                    "AD",
                    "S",
                    "D"
          ],
          "info": "Specifies where to insert tracking location. User has to select either of these Before Source, Between Source and Destination, After Destination."
},
        "CARRIER_SCAC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SCAC",
          "info": "Carrier for this part of leg i.e between the previous stop/tracking location tol this tracking location."
},
        "PRIMARY_RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_SERVICE",
          "info": "A unique identifier to define the primary rate service withing GC3. The gid contains the domain portion.Refers column Rate_Service.Rate_Service_gid."
},
        "SECONDARY_RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE",
          "info": "A unique identifier to define the secondary rate service withing GC3. The gid contains the domain portion. This is useful when the primary rate service is unavailableRefers column rate_service.rate_service_gid."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "When build shipment stops (as shipment tracking location), this special service will be added to the stop.Refers column special_service.special_service_gid."
},
        "IS_MOTHER_VESSEL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designating the service provider as the 'Mother Vessel'. This leg service provider will be automatically being populated as the header information."
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