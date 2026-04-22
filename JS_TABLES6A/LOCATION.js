// LOCATION.js

window.LOCATION = {
  "tables": {
    "LOCATION": {
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the location. "
        },
        "LOCATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the location. "
        },
        "LOCATION_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true,
          "info": "The name of the location. "
        },
        "CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The name of the city for the location. "
        },
        "PROVINCE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The province (or U.S. state) for the location. "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The abbreviation for the province (or U.S. state) for the location. "
        },
        "POSTAL_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The postal code for the location. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "A GID to define the three digit country code. "
        },
        "ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The zone where the location fits in. "
        },
        "ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The zone where the location fits in. "
        },
        "ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The zone where the location fits in. "
        },
        "ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The zone where the location fits in. "
        },
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_ZONE",
          "info": "The GID for the time zone of the location. Examples of time zones include America/Curacao and Europe/Monaco. "
        },
        "LAT": {
          "type": "NUMBER(10,5)",
          "nullable": true,
          "info": "The latitude for the location. "
        },
        "LON": {
          "type": "NUMBER(10,5)",
          "nullable": true,
          "info": "The longitude of the location. "
        },
        "SOURCING_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Another way of grouping the locations. "
        },
        "DELIVERY_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Another way of grouping the locations. "
        },
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "The GID for the region. "
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The GID for the service provider for the location. "
        },
        "LOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_GROUP",
          "info": "The GID for the location group for the location. "
        },
        "IS_TEMPORARY": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A flag to identify if the location is created temporarily for a certain shipment or order. This location will not be used for other shipments or processes. "
        },
        "IS_MAKE_APPT_BEFORE_PLAN": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A true or false flag to identify if an appointment is required at the location for (example) for pickup, delivery etc. "
        },
        "IS_SHIPPER_KNOWN": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "The Known Shipper check box indicates if a shipper is known or unknown. Shippers are considered unknown if they have not filed the appropriate paperwork and gained permission to ship goods on passenger flights. Goods transported by these shippers must be placed on cargo flights. Select Known Shipper if orders coming from this location can be qualified as known, and therefore transported on passenger flights. "
        },
        "IS_ADDRESS_VALID": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N",
            "U"
          ],
          "info": "Indicates if the address is considered valid (by checking against the POSTAL_CODE_VALIDATE table). "
        },
        "RATE_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_CLASSIFICATION",
          "info": "The GID for the rate classification. Examples include: COMMERCIAL and RESIDENTIAL. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The GID for the equipment group profile. An Equipment Group Profile is used to categorize Equipment groups by some common attribute or grouping scheme. For example, you can create a Group Profile called Dry Vans that include the 28 FT Dry Van and 24 FT Dry Van (and others if you like) Equipment Groups.\nAn Equipment Group Profile consists of an ID and a Profile Name and a collection of specific Equipment Groups that you associate with the profile. Oracle Transportation Management can use the Profile in planning to limit the Equipment Groups that can be used for shipment planning. When Oracle Transportation Management bundles orders and builds shipments, it checks that there is an intersection between the equipment group values identified on the order bases.\nExample: Equipment Group Rule "
        },
        "SLOT_TIME_INTERVAL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The smallest appointment slot interval for the location. "
        },
        "SLOT_TIME_INTERVAL_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the location appointment slot time interval. "
        },
        "SLOT_TIME_INTERVAL_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The location appointment slot time interval in the base unit of measure. "
        },
        "IS_LTL_SPLITABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The LTL Splittable check box indicates whether orders from or to this location are permitted to apply the LTL splitting logic. If the check box is not selected, the LTL splitting is disallowed for orders associated with this location. "
        },
        "NUM_OF_ROWS_IN_YARD": {
          "type": "NUMBER(4)",
          "nullable": true,
          "info": "The total number of rows in the yard of the location. "
        },
        "NUM_OF_SLOTS_PER_ROW_IN_YARD": {
          "type": "NUMBER(4)",
          "nullable": true,
          "info": "The number of slots per row in the yard of the location. "
        },
        "USE_APPOINTMENT_PRIORITY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not to consider appointment priority. "
        },
        "SCHEDULE_LOW_PRIORITY_APPOINT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not to schedule appointment for low priority appointment that has been bumped off. "
        },
        "ENFORCE_TIME_WINDOW_APPOINT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not to enforce the pick up or delivery time window during appointment schedule process.\"USE_APPOINTMENT_PRIORITY\" takes precedence of \"ENFORCE_TIME_WINDOW_APPOINT\". "
        },
        "SCHEDULE_INFEASIBLE_APPOINT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not to schedule appointment if the appointment time available is out of pick up or delivery time window. "
        },
        "COUNTY_QUALIFIER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "County Qualifier is used when calling an external distance engine and using an address type of city instead of postal code. Often, there are two cities or towns with the same name in one state. For example, in Pennsylvania there is more than one town with the name \"Newtown\". If you do not combine the town with a postal code or a county, you may not get the result you want.\nYou can manually add values; however, you probably want to import them from the external distance engine that you are using. The county qualifier needs to correspond with the distance engine that you are using. "
        },
        "BB_MAX_CASES_PER_BATCH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum number of cases allowed in each batch.  If blank, the system will assume that there is no limit.  If the number of cases in the order exceeds this maximum, then the batch balancer's splitting logic will distribute the cases into multiple batches uniformly while honoring certain rules. "
        },
        "BB_IS_NEW_STORE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if this location should be treated as a new store by the Batch Balancer logic.  New stores can only be assigned by Batch Balancer to a DOOR whose LOAD_NEW_STORE field is set to Y. "
        },
        "BB_ORDER_SPLIT_METHOD": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "CONVEYABLE",
            "ALL"
          ],
          "info": "Value of \"CONVEYABLE\" causes only conveyable cases to be counted toward max cases, value of \"ALL\" causes all cases (including non-con and repack) to count toward max cases. "
        },
        "EXCLUDE_FROM_ROUTE_EXECUTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "When = Y, this location is excluded from any Route Instance Legs. "
        },
        "APPOINT_DISPLAY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The duration of appointment display time period. "
        },
        "APPOINT_DISPLAY_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Unit of measure for ACTIVITY_TIME column. Unit of measure for ACTIVITY_TIME column. The unit of measure of appoint_display column. "
        },
        "APPOINT_DISPLAY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The appointment duration in base units. "
        },
        "APPOINT_DISPLAY_START_TIME": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The start time of appointment view display. "
        },
        "PICKUP_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "Pickup Routing Sequence and Dropoff Routing Sequence control the routing sequence; how the system plans the sequence of shipment stops that are built from an order. "
        },
        "DROPOFF_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTING_SEQUENCE",
          "info": "Pickup Routing Sequence and Dropoff Routing Sequence control the routing sequence; how the system plans the sequence of shipment stops that are built from an order. "
        },
        "POSTAL_SPLC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPLC",
          "info": "The Postal Standard Point Location Code for this Location. "
        },
        "RAIL_SPLC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPLC",
          "info": "The Rail Standard Point Location Code for this Location. "
        },
        "RAIL_STATION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STATION_CODE",
          "info": "The Rail Station Code for this Location. "
        },
        "ERPC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ERPC",
          "info": "The Eastern Region Presidents Commission Code for this Location. "
        },
        "RAIL_JUNCTION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JUNCTION_CODE",
          "info": "The Rail Junction Code for this Location. "
        },
        "SERVING_SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "The Serving Service Provider Profile for this Location. "
        },
        "YARD_ROW_LABELS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Comma separated list of labels for rows in a yard. "
        },
        "YARD_SLOT_LABELS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Comma separated list of labels for slots in a yard. "
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies if the location record is a template or represents a physical location. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Free text to capture different location types or classifications like customer, vendor site, or stores etc. "
        },
        "STANDING_APPT_CUTOFF_WINDOW": {
          "type": "NUMBER(4)",
          "nullable": true,
          "info": "The cutoff window by which unbooked standing appointments to be released. "
        },
        "ALLOW_DRIVER_REST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if a driver is allowed to take a rest period at this location if he runs out of available HOS. "
        },
        "APPT_OBJECT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "S",
            "G",
            "B"
          ],
          "info": "Indicates the types of appointment objects this location handles.  Shipments, Shipment Groups or both Shipments and Shipment Groups. "
        },
        "APPT_SEARCH_DAYS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Use the Appointment Search Days field to override the value of the glog.appointment.searchDays property for this location. Set this field to control the number of days to look forward for the first feasible appointment. "
        },
        "APPT_SHOW_NUMBER_OF_OPTIONS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Use the Appointment Show Number Of Options field to override the value of the glog.appointment.scheduleAppointmentShowOptions.numberOfAppointments property for this location. Set this field to control how many appointments are displayed when running the Schedule Appointment - Show Options action on the Appointment Management page. "
        },
        "APPOINTMENT_ACTIVITY_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "DROP",
            "LIVE"
          ],
          "info": "Appointment activity type refers to whether the appointment if for a drop trailer or live unload scenario. "
        },
        "IS_FIXED_ADDRESS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N if address is only allowed to be edited by the UI. "
        },
        "PRIMARY_ADDRESS_LINE_SEQ": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The Address Line Number or primary address line sequence number designates which line of the address text box contains the actual street address so when using the External Distance Engine, the correct street address is used. \nFor example, if you had this address in the text box, the line number would be 2.\nCare of Someone\n1234 Main St. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Used to activate or deactivate location. When the value is 'N', it can restrain user from planning order to or from the inactive location; from tendering shipment with inactive location. "
        },
        "ADDRESS_UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date on which the details -CITY,COUNTRY,PROVINCE,PROVINCE_CODE,POSTAL_CODE are modified.RPLS checks this date before it starts screening. "
        },
        "SRC_ARB_LEVEL_OF_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEVEL_OF_SERVICE",
          "info": "Preferred source arbitrary level of service when selecting the source arbitrary for a location during bulkplan. "
        },
        "DEST_ARB_LEVEL_OF_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LEVEL_OF_SERVICE",
          "info": "Preferred destination arbitrary level of service when selecting the destination arbitrary for a location during bulkplan. "
        },
        "USE_SINGLE_SERVPROV_RULE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "P",
            "D",
            "B"
          ],
          "info": "This specifies the use of single service provider rule at a location. The options are: null - rule is not used, P - for pickups only, D - for deliveries only, B - for both pickups and deliveries."
        }
      },
      "fk_tables": [
        "ACTIVITY_TIME",
        "ASSET_PARENT_LOCATION",
        "CHARTER_VOYAGE",
        "CHARTER_VOYAGE_STOWAGE",
        "CONSOL",
        "CONTACT",
        "CONTAINER_GROUP",
        "CR_FLEET",
        "CR_ROUTE_LEG",
        "CUSTOMER_ACCOUNT_NUMBER",
        "DEPOT_PROFILE_D",
        "DISTANCE_BY_ADDRESSES",
        "DM_TRANSACTION",
        "DRIVER",
        "DRIVER_ASSIGNMENT",
        "DRIVER_CALENDAR",
        "DRIVER_CALENDAR_EVENT",
        "DRIVER_LOCATION_PREFERENCE_D",
        "DRIVER_TYPE_CALENDAR",
        "EQUIPMENT",
        "FLIGHT",
        "FLIGHT_INSTANCE",
        "GTM_BOND_PORT",
        "GTM_LICENSE_PORT",
        "GTM_TRANSACTION_INV_LOCATION",
        "GTM_TRANSACTION_PORT",
        "GTM_TRANS_LINE_PROD_DOC",
        "IE_SHIPMENTSTATUS",
        "IE_SS_STOP",
        "IM_MILEAGE",
        "INTERIM_FLIGHT",
        "INTERIM_FLIGHT_INSTANCE",
        "INVOICE_STOP",
        "I_MESSAGE",
        "LEG",
        "LEG_INTERIM_POINT",
        "LG_ADDRESS",
        "LOAD_CONFIG_RULE",
        "LOCATION_ACCESSORIAL",
        "LOCATION_ADDRESS",
        "LOCATION_CAPACITY_GROUP_JOIN",
        "LOCATION_COMPATIBILITY",
        "LOCATION_CORPORATION",
        "LOCATION_LOAD_UNLOAD_POINT",
        "LOCATION_OVERRIDE",
        "LOCATION_PROFILE_DETAIL",
        "LOCATION_REFNUM",
        "LOCATION_REMARK",
        "LOCATION_RESOURCE_TYPE",
        "LOCATION_ROLE_PROFILE",
        "LOCATION_ROUTING_RULES",
        "LOCATION_SERVPROV_PREF",
        "LOCATION_SPECIAL_SERVICE",
        "LOCATION_STATUS",
        "LOCATION_SUBSTITUTE",
        "LOGISTICS_GUIDE_GEOGRAPHY",
        "LRG_APPT_RULE_SET_JOIN",
        "LRG_LOCATION_JOIN",
        "OB_LINE",
        "OB_ORDER_BASE",
        "OB_RELEASE_INSTRUCTION",
        "OB_SHIP_UNIT",
        "OB_SU_RELEASE_INSTRUCTION",
        "OPERATIONAL_LOCATION",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE",
        "ORDER_ROUTING_RULE",
        "OR_STOP",
        "PARTY_SITE",
        "POWER_UNIT",
        "P_LOCATION_GROUP_DETAIL",
        "P_SHIPMENT",
        "P_SHIPMENT_ARB_LANE",
        "QUOTE",
        "QUOTE_COST_OPTION_SHIPMENT",
        "RATE_GEO",
        "REGION_DETAIL",
        "REPETITION_SCHEDULE_STOP",
        "RESOURCE_SCHEDULE",
        "RESOURCE_SCHEDULE_INSTANCE",
        "ROUTE_CODE",
        "ROUTE_INSTANCE",
        "ROUTE_TEMPLATE",
        "ROUTE_TMPLT_LEG_LOC_INCOMPAT",
        "ROUTING_CONSTRAINT_D",
        "SERVICE_TEMPLATE",
        "SERVPROV_SERVICE",
        "SHIPMENT",
        "SHIPMENT_STOP",
        "SHIP_GROUP",
        "SHIP_GROUP_RULE",
        "SKU",
        "SS_LOCATION",
        "SS_STATUS_HISTORY",
        "TENDER_COLLABORATION",
        "TENDER_COLLAB_CB_FIELD",
        "TENDER_COLLAB_SERVPROV",
        "TRACKING_LOCATION_RT",
        "TRACKING_LOCATION_RT_D",
        "UNITIZATION_RULE",
        "VESSEL",
        "VOYLOC",
        "WORK_INVOICE_ACTIVITY",
        "X_LANE",
        "X_VOY_LOC_MAP",
        "YARD"
      ]
    }
  }
};
